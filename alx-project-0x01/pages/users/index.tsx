import React from 'react';
import { UsersProps } from '@/interfaces';
import Header from "@/components/layout/Header";
import UserCard from '@/components/common/UserCard';

interface UsersPageProps {
    posts: UsersProps[];
}

const Users: React.FC<UsersPageProps> = ({posts}) => {
    return(
        <div>
            <Header/>
             <div className="p-8 space-y-4">
                <h1 className="text-3xl font-bold">Users</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;