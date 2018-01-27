/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
/**
 * AccueilController
 *
 * @description :: Server-side logic for managing Accueils
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	/**
	 * Welcome page ( / )
	 * @method index
	 * @param {} req
	 * @param {} res
	 * @param {} next
	 * @return
	 */
	index: function(req, res, next) {
        gladys.utils.sql('SELECT * FROM user;')
          .then(function(users){
             var signupAllowed = (users.length === 0); 
             res.view('welcome/homepage', {
                layout: null,
                signupActive: signupAllowed
             });
          });
	},
	
	/**
	 * Login Page ( /login )
	 * @method index
	 * @param {} req
	 * @param {} res
	 * @param {} next
	 * @return
	 */
	login: function(req, res, next){
		res.view('welcome/index', {
			layout: null,
			signupActive: sails.config.signup.active
		});	
	},
    
    installation: function(req, res, next){
        res.view('installation/index', {
            layout: null
        });
    }
};