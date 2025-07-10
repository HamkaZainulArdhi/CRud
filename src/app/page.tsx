import { useEffect, useState } from "react";
// import { supabase } from "@/utils/supabaseClient";

type user = {
  id: number;
  name: String;
  email: String;
};
function App() {
  const [users, setUsers] = useState<user[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const addUser = async () => {
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    fetchUsers();
  };

  const deleteUser = async (id: number) => {
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>crud</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint,
        reiciendis culpa magnam distinctio beatae numquam facere illum porro,
        nisi debitis corrupti, perferendis modi cumque. Consequatur quia sint
        exercitationem delectus.
      </p>

      <input
        type="text"
        placeholder="masukan user"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="masukan user"
        onChange={(e) => setEmail(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
