create table if not exists volcano
(
	id bigint not null
		constraint volcano_pkey
			primary key,
	name varchar(255)
);
