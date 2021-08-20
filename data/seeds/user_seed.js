exports.seed = function(knex) {
    return knex('users').truncate()
        .then(function () {
            return knex('users').insert([
                { user_name: 'Andrew', email: 'andrew@busby.com'},
                { user_name: 'Sasuke', email: 'sasuke@uchia.com'},
                { user_name: 'Naruto', email: 'naruto@uzamaki.com'}
            ])
        })
}