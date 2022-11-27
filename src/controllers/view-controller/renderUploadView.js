/**
 * author: Refaat
 * this controller renders the EJS upload view
 */
const renderUploadView = async (request, response, next) => {
    try {
        response.render('upload');
    } catch (error) {
        throw error;
    }
}


module.exports = { renderUploadView }