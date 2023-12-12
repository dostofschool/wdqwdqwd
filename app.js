const express = require("express");
const app = express();
const jsonParser = express.json();
const fs = require('fs');
const multer = require('multer');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sub2 = ['Информатика', 'Физика', 'Математика', 'Химия', 
            'Русский<br>язык', 'Английский<br>язык', 'Немецкий<br>язык', 'Французский<br>язык', 
            'Испанский<br>язык', 'Китайский<br>язык', 'Итальянский<br>язык', 'Биология', 
            'Экология', 'География', 'Астрономия', 'Литература',
            'История', 'Обществознание', 'Экономика', 'Право',
            'Искусство', 'Физическая<br>культура', 'Технология', 'ОБЖ'];
const subjects = [['informatics', 0, 'по информатике', 'inf_op', 'inf_ss'], 
                ['physics', 1, 'по физике', 'phys_op', 'phys_ss'], 
                ['math', 2, 'по математике', 'math_op', 'math_ss'], 
                ['chemistry', 3, 'по химии', 'chem_op', 'chem_ss'],
                ['russian', 4, 'по русскому языку', 'rus_op', 'rus_ss'],
                ['english', 5, 'по английскому языку', 'en_op', 'en_ss'],
                ['german', 6, 'по немецкому языку', 'ger_op', 'ger_ss'],
                ['french', 7, 'по французыскому языку', 'fr_op', 'fr_ss'],
                ['spanish', 8, 'по испанскому языку', 'sp_op', 'sp_ss'],
                ['chinese', 9, 'по ктайскому языку', 'china_op', 'china_ss'],
                ['italian', 10, 'по итальянскому языку', 'it_op', 'it_ss'],
                ['biology', 11, 'по биологии', 'bio_op', 'bio_ss'],
                ['ecology', 12, 'по экологии', 'eco_op', 'eco_ss'],
                ['geography', 13, 'по географии', 'geo_op', 'geo_ss'],
                ['astro', 14, 'по астрономии', 'astro_op', 'astro_ss'],
                ['litra', 15, 'по литературе', 'lit_op', 'lit_ss'],
                ['history', 16, 'по истории', 'hist_op', 'hist_ss'],
                ['obga', 17, 'по обществознанию', 'obga_op', 'obga_ss'],
                ['econom', 18, 'по экономике', 'econ_op', 'econ_ss'],
                ['pravo', 19, 'по праву', 'pr_op', 'pr_ss'],
                ['isk', 20, 'по искусству', 'isk_op', 'isk_ss'],
                ['fisra', 21, 'по физической культуре', 'fisra_op', 'fisra_ss'],
                ['techno', 22, 'по технологии', 'techno_op', 'techno_ss'],
                ['obzh', 23, 'по основам безопасности жизнедеятельности', 'obzh_op', 'obzh_ss']];
let forpham;
let forlogin;
let forname;
let forklass;
let formidname;
let checker = 0;
let cho1; 
let cho2; 
let index;
let vtoroe;
const userScheme = new Schema({
    name: String,
    surname: String,
    midname: String,
    classer: Number,
    bukva: String,
    login: String,
    password: String,
    inf_op: {type: [String], default: []}, inf_ss: {type: [String], default: []}, informatics: {type: Number, default: 0},
    phys_op: {type: [String], default: []}, phys_ss: {type: [String], default: []}, physics: {type: Number, default: 0},
    math_op: {type: [String], default: []}, math_ss: {type: [String], default: []}, math: {type: Number, default: 0},
    chem_op: {type: [String], default: []}, chem_ss: {type: [String], default: []}, chemistry: {type: Number, default: 0},
    rus_op: {type: [String], default: []}, rus_ss: {type: [String], default: []}, russian: {type: Number, default: 0},
    en_op: {type: [String], default: []}, en_ss: {type: [String], default: []}, english: {type: Number, default: 0},
    ger_op: {type: [String], default: []}, ger_ss: {type: [String], default: []}, german: {type: Number, default: 0},
    fr_op: {type: [String], default: []}, fr_ss: {type: [String], default: []}, french: {type: Number, default: 0},
    sp_op: {type: [String], default: []}, sp_ss: {type: [String], default: []}, spanish: {type: Number, default: 0},
    china_op: {type: [String], default: []}, china_ss: {type: [String], default: []}, chinese: {type: Number, default: 0},
    it_op: {type: [String], default: []}, it_ss: {type: [String], default: []}, italian: {type: Number, default: 0},
    bio_op: {type: [String], default: []}, bio_ss: {type: [String], default: []}, biology: {type: Number, default: 0},
    eco_op: {type: [String], default: []}, eco_ss: {type: [String], default: []}, ecology: {type: Number, default: 0},
    geo_op: {type: [String], default: []}, geo_ss: {type: [String], default: []}, geography: {type: Number, default: 0},
    astro_op: {type: [String], default: []}, astro_ss: {type: [String], default: []}, astro: {type: Number, default: 0},
    lit_op: {type: [String], default: []}, lit_ss: {type: [String], default: []}, litra: {type: Number, default: 0},
    hist_op: {type: [String], default: []}, hist_ss: {type: [String], default: []}, history: {type: Number, default: 0},
    obga_op: {type: [String], default: []}, obga_ss: {type: [String], default: []}, obga: {type: Number, default: 0},
    econ_op: {type: [String], default: []}, econ_ss: {type: [String], default: []}, econom: {type: Number, default: 0},
    pr_op: {type: [String], default: []}, pr_ss: {type: [String], default: []}, pravo: {type: Number, default: 0},
    isk_op: {type: [String], default: []}, isk_ss: {type: [String], default: []}, isk: {type: Number, default: 0},
    fisra_op: {type: [String], default: []}, fisra_ss: {type: [String], default: []}, fisra: {type: Number, default: 0},
    techno_op: {type: [String], default: []}, techno_ss: {type: [String], default: []}, techno: {type: Number, default: 0},
    obzh_op: {type: [String], default: []}, obzh_ss: {type: [String], default: []}, obzh: {type: Number, default: 0},
}, {
    versionKey: false
})
const User = mongoose.model("User", userScheme);



app.use(express.static(__dirname + '/static'));

app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");



const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/izobr');
    },
    filename: (req, file, cb) => {
        if(file.mimetype.includes('png')) {
            cb(null, Date.now().toString() + '.png');
        }
        else if(file.mimetype.includes('jpeg')) {
            cb(null, Date.now().toString() + '.jpeg');
        }
        else if(file.mimetype.includes('jpg')) {
            cb(null, Date.now().toString() + '.jpg');
        }
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || 
        file.mimetype === "image/jpg"|| 
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

const upload = multer({storage: storageConfig, fileFilter: fileFilter});



async function getallsorted(gitro, gitx, sub2, sub3, sub4) {
    const resusers = await User.find({}).sort({[gitro]: -1});
    let diver = `<div id="dosti${gitx}" class="dosti prev">`;
    let cheer;
    if(resusers.length >= 11) {
        cheer = 10;
    }
    else {
        cheer = resusers.length;
    }
    for(let i = 0; i < cheer; i++) {
        const el = resusers[i];
        if(el[gitro] === 0) {
            break;
        }
        diver += `<p> <a href="/notmydost/${sub2}/${sub3}/${sub4}/${el.classer} «${el.bukva}»/${el.surname}/${el.name}/${el.login}"> 
                       ${i+1}. ${el.surname} ${el.name} ${el.classer} «${el.bukva}» - ${el[gitro]}</a> </p>`;
    }
    diver += '</div>';
    return diver;
}



async function main() {
    try {
        await mongoose.connect("mongodb+srv://schooldost:SJJTCdQrUIbcNO0v@cluster0.dagmfpo.mongodb.net/usersdb");
        app.listen(3000, () => console.log('successful'));
    }
    catch (err) {
        return console.log(err);
    }
}

app.get("/", async(req, res) => {
    res.sendFile(__dirname + '/title.html');
})

app.get("/glav", async (request, response) => {
    let nitro = [];
    for (let i = 0; i < subjects.length; i++) {
        nitro[i] = await getallsorted(subjects[i][0], subjects[i][1], subjects[i][2], subjects[i][3], subjects[i][4]);
    }
    response.render("gl", {
        nitro: nitro,
        suber: sub2
    });
})

app.use("/notmydost/:vtoroe/:cho1/:cho2/:choklass/:chosurname/:choname/:chologin", async(req, res) => {
    cho1 = req.params['cho1'];
    cho2 = req.params['cho2'];
    const chologin = req.params['chologin'];
    const user = await User.findOne({login: chologin});
    let tirir = '';
    for (let i = 0; i < user[cho1].length; i++) {
        tirir += `<div id="izodiv${i}" class="izodiv"><img src="/izobr/${user[cho2][i]}" v-on:click="priblizh(${i})" id="izobr${i}"><br><p>${user[cho1][i]}</p></div>`;
    }
    res.render("notmydost", {
        surer: req.params['chosurname'],
        namer: req.params['choname'],
        klasser: req.params['choklass'],
        vtoroe: req.params['vtoroe'],
        tretie: tirir
    })
    
})

app.post("/provlogina", async (request, response) => {
    const buffers = [];
    for await (const chunk of request) {
        buffers.push(chunk);
    }
    let userName = Buffer.concat(buffers).toString();
    const count = await User.countDocuments({login: userName});
    response.send(count.toString());
})

app.post("/pekka", jsonParser, async (req, response) => {
    if(!req.body) return response.sendStatus(400);
    const userName = req.body.name;
    const usersurName = req.body.surname;
    const usermidName = req.body.midname;
    const userKlass = req.body.classer;
    const userBukva = req.body.bukva;
    const userLogin = req.body.login;
    const userPass = req.body.password;
    forpham = usersurName; checker = 1; forlogin = userLogin; forklass = userKlass + ' "' + userBukva + '"'; forname = userName; formidname = usermidName;
    const user = new User({name: userName, surname: usersurName, midname: usermidName, classer: userKlass, bukva: userBukva, login: userLogin, password: userPass});
    await user.save();
    response.redirect("profile");
})

app.post("/provVhoda", jsonParser, async(req, res) => {
    if(!req.body) return response.sendStatus(400);
    const userLogin = req.body.login;
    const userPass = req.body.password;
    const count = await User.countDocuments({login: userLogin, password: userPass});
    if(count === 0) {
        res.send('No');
    }
    else {
        const user = await User.findOne({login: userLogin, password: userPass});
        forpham = user.surname; checker = 1; forlogin = user.login; forname = user.name; formidname = user.midname; forklass = user.classer + ' "' + user.bukva + '"';
        res.redirect("profile");
    }
})


app.use("/registration", async (request, response) => {
    if (checker === 0) {
        response.sendFile(__dirname + "/registration.html");
    }
    else {
        response.redirect("profile");
    }
})

app.use("/loginning", async (request, response) => {
    if (checker === 0) {
        response.sendFile(__dirname + "/loginning.html");
    }
    else {
        response.redirect("profile");
    }
})


app.use("/profile", async (request, response) => {
    if(checker === 0) {
        response.redirect("registration");
    }
    else {
        let vsedost = '';
        for (let i = 0; i < 24; i++) {
            vsedost += `<div> <a href="/mydost/${subjects[i][2]}/${subjects[i][3]}/${subjects[i][4]}/${subjects[i][0]}">${sub2[i]}</a> </div>`;
        }
        response.render("mine", {
            pham: forpham,
            loger: forlogin,
            otcher: formidname,
            klasser: forklass,
            imer: forname,
            vsedost: vsedost
        })
    }
})

app.use("/mydost/:vtoroe/:cho1/:cho2/:index", async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        cho1 = req.params['cho1'];
        cho2 = req.params['cho2'];
        index = req.params['index'];
        vtoroe = req.params['vtoroe'];
        const user = await User.findOne({login: forlogin});
        let tirir = '';
        for(let i = 0; i < user[cho1].length; i++) {
            tirir += `<div id="izodiv${i}" class="izodiv"><img src="/izobr/${user[cho2][i]}" v-on:click="priblizh(${i})" id="izobr${i}"><br><p>${user[cho1][i]}</p><br><div id="trix"><button v-on:click="ydalenie(${i})">Удалить достижение</button></div></div>`;
        }
        res.render("mydost", {
            pervoe: 'Мои достижения',
            vtoroe: vtoroe,
            tretie: tirir
        })
    }
})

app.post('/ydaldost', async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        const buffers = [];
        for await (chunk of req) {
            buffers.push(chunk);
        }
        const udid = Number(Buffer.concat(buffers));
        const user = await User.findOne({login: forlogin});
        fs.unlinkSync(`static/izobr/${user[cho2][udid]}`);
        user[index]--;
        user[cho1].splice(udid, 1);
        user[cho2].splice(udid, 1);
        await User.findOneAndUpdate({login: forlogin}, {[index]: user[index], [cho1]: user[cho1], [cho2]: user[cho2]});
        res.redirect(`/mydost/${vtoroe}/${cho1}/${cho2}/${index}`);
    }
})

app.use('/dobavlenie', async(req, res) => {
    if (checker === 1) {
        res.sendFile(__dirname + '/dobavlenie.html')
    }
    else {
        res.redirect("registration");
    }
})

app.use('/dobavlenie2', async(req, res) => {
    if (checker === 1) {
        res.sendFile(__dirname + '/dobavlenie2.html')
    }
    else {
        res.redirect("registration");
    }
})

app.post('/upload', upload.single('filer'), async(req, res) => {
    let filedata = req.file;
    let opisanie = req.body.opisanie;
    if(!filedata) {
        res.redirect('/dobavlenie2');
    }
    else {
        const user = await User.findOne({login: forlogin});
        user[cho1][user[index]] = opisanie;
        user[cho2][user[index]] = filedata.filename;
        user[index]++;
        await User.findOneAndUpdate({login: forlogin}, {[index]: user[index], [cho1]: user[cho1], [cho2]: user[cho2]});
        res.redirect(`/mydost/${vtoroe}/${cho1}/${cho2}/${index}`);
    }
})

app.use('/delete', async(req, res) => {
    if (checker === 1) {
        res.sendFile(__dirname + "/delete.html");
    }
    else {
        res.redirect("registration");
    }
})

app.post('/ydalenie', async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        const buffers = [];
        for await (chunk of req) {
            buffers.push(chunk);
        }
        const passet = Buffer.concat(buffers).toString();
        const count = await User.countDocuments({login: forlogin, password: passet});
        if(count === 0) {
            res.send('No');
        }
        else {
            await User.deleteOne({login: forlogin});
            checker = 0; forpham = ''; forlogin = ''; forname = ''; forklass = ''; formidname = '';
            res.redirect('/');
        }
    }
})

app.use('/editing', async(req, res) => {
    if (checker === 1) {
        const user = await User.findOne({login: forlogin});
        res.render("editing", {
            pham: forpham,
            loger: forlogin,
            otcher: formidname,
            cifra: user.classer,
            bukva: user.bukva,
            imer: forname,
        })
    }
    else {
        res.redirect("registration");
    }
})

app.use('/izmena', jsonParser, async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        if(!req.body) return res.sendStatus(400);
        const userName = req.body.name;
        const usersurName = req.body.surname;
        const usermidName = req.body.midname;
        const userKlass = req.body.classer;
        const userBukva = req.body.bukva;
        const userLogin = req.body.login;
        await User.findOneAndUpdate({login: forlogin}, {name: userName, surname: usersurName, midname: usermidName, classer: userKlass, bukva: userBukva, login: userLogin});
        forpham = usersurName; forlogin = userLogin; forklass = userKlass + ' "' + userBukva + '"'; forname = userName; formidname = usermidName;
        res.redirect("profile");
    }
})

app.use('/editpassword', async(req, res) => {
    if (checker === 1) {
        res.sendFile(__dirname + "/editpassword.html");
    }
    else {
        res.redirect("registration");
    }
})

app.post('/feditpass', jsonParser, async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        const oldpass = req.body.oldpass;
        const newpass = req.body.newpass;
        const count = await User.countDocuments({login: forlogin, password: oldpass});
        if(count === 0) {
            res.send('No');
        }
        else {
            await User.findOneAndUpdate({login: forlogin}, {password: newpass});
            res.redirect('profile');
        }
    }
})

app.use("/ishod", async(req, res) => {
    if(checker === 0) {
        res.redirect("registration");
    }
    else {
        checker = 0; forpham = ''; forlogin = ''; forname = ''; forklass = ''; formidname = '';
        res.redirect("/");
    }
})

main();
process.on("SIGINT", async() => { 
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});