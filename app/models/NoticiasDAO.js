function NoticiasDAO(connection){
    this._connextion = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connextion.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connextion.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connextion.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}
