function HomeReponse (req, res) {
    res.status(200).send("<h1>hello welcome<h1><h2>to our website express any change<h2>");
}

function AboutResponse (req, res) {
    res.status(200).send("this website is created by someone who is coder.");
}

module.exports = {
    HomeReponse,
    AboutResponse
};