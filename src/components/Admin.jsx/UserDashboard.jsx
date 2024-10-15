import React from 'react';



const UserDashboard = ({user}) => {


    if (!user) {
        return <h1>Please log in to view your dashboard</h1>;
    }

    return (
        <div>
            <div className="container my-4">
            <h2 className="text-center">User Dashboard</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr className="table-row">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, index) => (
                            
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                </tr>))
}
</tbody>
</table>
</div>
</div>
        </div>
    );
};

export default UserDashboard;
