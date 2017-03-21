// Copyright (c) 2017, Dirk Chang and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cloud Company Group', {
	setup: function(frm) {
		frm.fields_dict.user_list.grid.get_field('user').get_query  = function(){
			return {
				filters: {"ignore_user_type": 1}
			};
		};
	},
	refresh: function(frm) {

	}
});
