import { useThisContext } from "../../context/usercontext";
import { useState } from "react";

const Crud = () => {
    const { data, handleDelete, handleUpdate } = useThisContext();
    const [editId, setEditId] = useState(null);
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDomain, setUpdateDomain] = useState("");
    const [updateHead, setUpdateHead] = useState("");
    const [updateImage, setUpdateImage] = useState("");

    const handleEdit = (user) => {
        setEditId(user._id);
        setUpdateTitle(user.title);
        setUpdateDomain(user.domain);
        setUpdateHead(user.head);
        setUpdateImage(user.image);
    };

    const EditSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const updatedData = {
                title: updateTitle,
                domain: updateDomain,
                head: updateHead,
                image: updateImage,
            };
            handleUpdate(editId, updatedData);
            resetEditState();
        }
    };

    const resetEditState = () => {
        setEditId(null);
        setUpdateTitle("");
        setUpdateDomain("");
        setUpdateHead("");
        setUpdateImage("");
    };

    return (
        <div className="container my-4">
            <h2 className="text-center">CRUD Operations</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr className="table-row">
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Domain</th>
                            <th scope="col">Head</th>
                            <th scope="col">Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {editId === user._id ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={updateTitle}
                                            onChange={(e) => setUpdateTitle(e.target.value)}
                                        />
                                    ) : (
                                        user.title
                                    )}
                                </td>
                                <td>
                                    {editId === user._id ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={updateDomain}
                                            onChange={(e) => setUpdateDomain(e.target.value)}
                                        />
                                    ) : (
                                        user.domain
                                    )}
                                </td>
                                <td>
                                    {editId === user._id ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={updateHead}
                                            onChange={(e) => setUpdateHead(e.target.value)}
                                        />
                                    ) : (
                                        user.head
                                    )}
                                </td>
                                <td>
                                    {editId === user._id ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={updateImage}
                                            onChange={(e) => setUpdateImage(e.target.value)}
                                        />
                                    ) : (
                                        user.image
                                    )}
                                </td>
                                <td>
                                    {editId === user._id ? (
                                        <button onClick={EditSubmit} className="btn btn-info">
                                            Update
                                        </button>
                                    ) : (
                                        <div>
                                            <button onClick={() => handleEdit(user)} className="btn btn-warning m-2">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crud;
