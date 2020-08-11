exports.up = function (knex, Promise) {
	return knex.schema.createTable("accounts", function (accounts) {
		accounts.increments();
		accounts.string("name").notNullable().unique();
		accounts.decimal("budget").notNullable();
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("accounts");
};
