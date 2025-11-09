const userData = require("../userData");

function getUserByGender(req, res) {
    const queryParams = req.query;
    const searchedGender = queryParams.gender; // Male

    const filteredData = userData.data.filter((user) => { return user.gender.toLowerCase() 
        === searchedGender.toLowerCase() });

    res.status(200).json({
        count: filteredData.length,
        users: filteredData
    });
}

function getUserByFirstName (req, res) {
    const routeParams = req.params;
    const searchedFirstName = routeParams.firstName; // Esat

    const filteredData = userData.data.filter((user) => { return user.name.first.toLowerCase() 
        === searchedFirstName.toLowerCase() });

    res.status(200).json({
        users: filteredData[0]
    });
}

function  getAllUsers (req, res) {
    const users = userData.data;
    const totalNumerrofUsers = users.length;

    res.status(200).json({
        count: totalNumerrofUsers,
        users: users
    });
}

module.exports = {
    getAllUsers,
    getUserByGender,
    getUserByFirstName
};