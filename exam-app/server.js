const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { type } = require('os');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//IMPORTANT
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        console.log("FILE PATH " + file.path);

        cb(null, Date.now() + path.extname(file.originalname))
    }
});

//MongoDB CONNECT
mongoose.connect("mongodb://localhost:27017/shopcart", {

}).then(() => {
    console.log("Mongodb Connected")
});

const upload = multer({ storage: storage });

//SCHEMA
const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    password: String
}));

const Category = mongoose.model('Category', new mongoose.Schema({
    name: String
}));

const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    price: Number,
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    },
    photo: String
}));

app.post('/register', async (req, res) => {

    await User.create({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
    })

    res.json({
        message: "User Registered"
    })

});


app.post('/login', async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) return res.json({
        message: "User not found"
    })

    const ok = await bcrypt.compare(req.body.password, user.password);

    if (!ok) return res.json({
        message: "Password galat haiiii"
    })

    res.json({
        token: await jwt.sign({ id: user._id }, "secret123")
    })

});

app.get('/category/add', async (req, res) => {
    res.render('category', { message: "" });
})

app.post('/category/add', async (req, res) => {

    await Category.create({
        name: req.body.name
    });

    res.render('category', { message: "Category Added" });
})

app.get("/product/add", async (req, res) => {
    const categories = await Category.find();

    res.render("add", { categories: categories, message: "" });
})

app.post("/product/add", upload.single("photo"), async (req, res) => {
    const { name, price, category } = req.body;

    console.log("FILE" + req.file);
    const photo = req.file ? req.file.path : null;

    const pr = await Product.create({
        name: name,
        price: price,
        photo: photo,
        category: category
    })

    const products = await Product.find().populate('category');

    res.render('product', { products });

})

app.get('/', async (req, res) => {
    const products = await Product.find().populate('category');

    res.render('product', { products });
})

app.get('/product/get', async (req, res) => {
    const products = await Product.find().populate('category');

    res.json(products);
})

app.get('/product/delete/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });

    if (product && product.photo) {
        fs.unlink(product.photo, (err) => {
            console.log(err);
        })
    }

    await Product.deleteOne({
        _id: product._id
    })

    const products = await Product.find().populate('category');
    res.render('product', { products });

})






app.listen(5000, (req, res) => {
    console.log("Server is Started")
})