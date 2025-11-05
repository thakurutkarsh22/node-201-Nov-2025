function HomeReponse (req, res) {
    // send will write and end the response. 
    // send in only available with EXPRESS JS and not NODE JS 
    // send will send html, plain text
    res.status(200).send("<h1>hello welcome<h1><h2>to our website express any change<h2>");
}

function AboutResponse (req, res) {
    res.status(200).send("this website is created by someone who is coder.");
}

module.exports = {
    HomeReponse,
    AboutResponse
};