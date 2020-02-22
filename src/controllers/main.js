//funcion for get home
let getHome = async (req, res) => {
    try {
        return res.render("index", {          
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getHome: getHome
};