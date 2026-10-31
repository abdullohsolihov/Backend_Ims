import pool from "../config/db.js"
import argon from "argon2"
import { AppError } from "../middleware/errorHandler.js"

class StaffService {
    constructor() { }

    async getStaffs() {
        const staffs = await pool.query("select id, fullname, phone, photo, role, status, created_at from staff")

        return {
            status: 200,
            data: staffs.rows
        }
    }

    async createStaff(req, res) {
        const { fullname, phone, password } = req.body

        let existStaff = await pool.query("select * from staff where phone=$1", [phone])
        if (existStaff.rows.length) {
            throw new AppError("user already exist with this phone",409)
        }

        const hashPass = await argon.hash(password)

        await pool.query(`insert into staff(fullname,phone,password) values($1,$2,$3)`, [fullname, phone, hashPass])

        return {
            status: 201,
            message: "user succesfully created"
        }
    }

    async deleteStaff(req){
        const {userId} = req.params
        let existStaff = await pool.query("select * from staff where id=$1", [userId])
        if (!existStaff.rows.length) {
            throw new AppError("user not found with this userId",404)
        }

        await pool.query("update staff set status='inactive' where id=$1",[userId])
        
        return {
            status:200,
            message:"user deleted"
        }
    }
}

let staffService = new StaffService()
export default staffService