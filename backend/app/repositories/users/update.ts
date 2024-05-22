import db from "../../db/connection";
import { User } from "../../db/seeds/data/types/data.types";

export const update = async (id: string, updateBody: any): Promise<User> => {
    const {
        email,
        about,
        address,
        post_code,
        phone_number,
        additional_contacts,
        help_radius = 0,
    } = updateBody;

    const setClause = [];
    const values = [];

    if (email) {
        setClause.push(`email = $${values.push(email)}`);
    }
    if (about) {
        setClause.push(`about = $${values.push(about)}`);
    }
    if (address) {
        setClause.push(`address = $${values.push(address)}`);
    }
    if (post_code) {
        setClause.push(`post_code = $${values.push(post_code)}`);
    }
    if (phone_number) {
        setClause.push(`phone_number = $${values.push(phone_number)}`);
    }
    if (additional_contacts) {
        setClause.push(`additional_contacts = $${values.push(additional_contacts)}`);
    }
    if (help_radius) {
        setClause.push(`help_radius = $${values.push(help_radius)}`);
    }

    if (setClause.length === 0) {
        const { rows } = await db.query(
            "SELECT id, username, email, avatar_url, age, first_name, last_name, about, address, post_code, phone_number, additional_contacts, help_radius FROM users WHERE id = $1",
            [id]
        );
        return rows[0];
    }

    const query = `
    UPDATE users
    SET ${setClause.join(", ")}
    WHERE id = $${values.length + 1}
    RETURNING id, username, email, avatar_url, age, first_name, last_name, about, address, post_code, phone_number, additional_contacts, help_radius;
  `;

    values.push(id);

    const { rows } = await db.query(query, values);
    return rows[0];
};
