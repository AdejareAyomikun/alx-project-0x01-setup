import React from "react";
import {UsersProps} from "@/interfaces";

const UserCard: React.FC<{user: UsersProps}> = ({user}) =>{
    return (
        <div className="p-4 rounded-lg shadow-md bg-white space-y-2">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p>Email: <a href={`mailto:${user.email}`} className="text-blue-600">{user.email}</a></p>
            <p>Phone: {user.phone}</p>
            <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.website}</a></p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
        </div>
    )
}

export default UserCard;