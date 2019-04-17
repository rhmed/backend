const db = require("../../../data/dbConfig");

module.exports = {
  getUserById,
  updateUser,
  deleteUser
};

async function getUserById(id) {
  const user = await db("users")
    .where({ user_id: id })
    .first();

  return user;
}

async function updateUser(id, changes) {
  const updatedId = await db("users")
    .where({ user_id: id })
    .update(changes);

  const changedUser = await getUserById(updatedId);

  return changedUser;
}

async function deleteUser(id) {
  const deleted = await db("users")
    .where({ user_id: id })
    .del();

  return deleted;
}
