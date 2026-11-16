import db from '../config/db.js'

const selectAllUsers = async () => {
    const result = await db.execute('select * from dueno')
    return result;
}

export { selectAllUsers }