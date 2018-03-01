DROP DATABASE IF EXISTS lyre;
CREATE DATABASE lyre;

\c lyre;

CREATE TABLE writers (
  writer VARCHAR primary key,
  status VARCHAR
);

CREATE TABLE lists (
  writer varchar references writers(writer),
  listname text,
  subname text,
  albums text[]
);


INSERT INTO writers (writer, status)
  VALUES ('Nico', 'staff');

INSERT INTO lists (writer, listname, subname, albums) VALUES ('Nico', '2017', 'Best Albums', '{"A cros looked at me", "capcity", "life will see you now - jans"}');

  -- {
  --       name: "Nico",
  --       status: "staff",
  --       listsBuilt: [
  --         {
  --           name: "2017",
  --           subName: "Best Albums",
  --           albums: [
  --             "A cros looked at me - Mount eerie",
  --             "Capacity - Big Thief",
  --             "life will you seee you now - jans"
  --           ]
  --         }
  --       ]
  --     }
