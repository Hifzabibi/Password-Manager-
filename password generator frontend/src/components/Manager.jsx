import React, { useState } from "react";
import {
Eye,
EyeOff,
Copy,
Trash2,
Pencil,
Check,
X,
} from "lucide-react";
import { useEffect } from "react";

const Manager = () => {
const [showPassword, setShowPassword] = useState(false);

const [form, setForm] = useState({
site: "",
username: "",
password: "",
});

const getPasswords = async () => {
const req = await fetch("http://localhost:3000");
const passwords = await req.json();

```
setPasswords(passwords);

console.log(passwords);
```

};

useEffect(() => {
getPasswords();
}, []);

const [passwords, setPasswords] = useState([]);

const [editIndex, setEditIndex] = useState(null);

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

const togglePassword = () => {
setShowPassword(!showPassword);
};

const savePassword = async () => {
if (!form.site || !form.username || !form.password) {
alert("Please fill all fields");
return;
}

```
try {
  // New password
  if (editIndex === null) {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to save password");
    }

    const data = await response.json();

    console.log("Backend response:", data);

    setPasswords([...passwords, data.password]);
  }

  // Edit
  else {
    const updatedPasswords = [...passwords];

    updatedPasswords[editIndex] = form;

    setPasswords(updatedPasswords);
    setEditIndex(null);
  }

  setForm({
    site: "",
    username: "",
    password: "",
  });

  setShowPassword(false);
} catch (error) {
  console.error("Save error:", error);
}
```

};

const editPassword = (index) => {
setForm(passwords[index]);
setEditIndex(index);
setShowPassword(false);

```
window.scrollTo({
  top: 0,
  behavior: "smooth",
});
```

};

const cancelEdit = () => {
setEditIndex(null);

```
setForm({
  site: "",
  username: "",
  password: "",
});

setShowPassword(false);
```

};

const deletePassword = (index) => {
const updatedPasswords = passwords.filter((_, i) => i !== index);
setPasswords(updatedPasswords);

```
if (editIndex === index) {
  cancelEdit();
}
```

};

const copyToClipboard = async (value) => {
await navigator.clipboard.writeText(value);
};

return ( <section className="min-h-screen w-full bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 py-8 sm:py-12 lg:py-16"> <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-6">

```
    <div className="overflow-hidden rounded-2xl border border-purple-200 bg-white/80 shadow-xl backdrop-blur-sm sm:rounded-3xl">

      <div className="p-4 sm:p-6 md:p-8">

        <h1 className="mb-4 text-xl font-bold text-purple-900 sm:mb-6 sm:text-2xl">
          {editIndex !== null ? "Edit Password" : "Add New Password"}
        </h1>

        <div className="flex flex-col p-0 text-black sm:p-2">

          <input
            value={form.site}
            onChange={handleChange}
            type="text"
            name="site"
            autoComplete="off"
            placeholder="Enter website URL"
            className="w-full rounded-xl border-2 border-purple-200 bg-white p-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 sm:text-base"
          />

          <div className="flex flex-col justify-center gap-4 py-4 sm:gap-5 sm:py-5 md:flex-row">

            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Enter Username"
              className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 p-3 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 sm:text-base"
            />

            <div className="relative w-full">

              <input
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                placeholder="Enter Password"
                className="w-full rounded-xl border-2 border-purple-200 bg-purple-50 p-3 pr-12 text-sm text-gray-700 outline-none transition duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 sm:text-base"
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 transition hover:text-purple-700"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">

            <button
              onClick={savePassword}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:from-purple-700 hover:to-violet-700 hover:shadow-xl sm:w-auto sm:px-8"
            >
              {editIndex !== null ? (
                <Check size={20} />
              ) : (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xl">
                  +
                </span>
              )}

              {editIndex !== null ? "Update Password" : "Add Password"}
            </button>

            {editIndex !== null && (
              <button
                onClick={cancelEdit}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-6 py-3 font-semibold text-gray-600 transition hover:bg-gray-200 sm:w-auto"
              >
                <X size={19} />
                Cancel
              </button>
            )}

          </div>

        </div>
      </div>

      <div className="mx-4 border-t border-purple-200 sm:mx-6 md:mx-8"></div>

      <div className="p-4 sm:p-6 md:p-8">

        <div className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-xl font-bold text-purple-900 sm:text-2xl">
              Your Passwords
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Manage your saved website passwords
            </p>
          </div>

          <div className="w-fit rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-700 sm:text-sm">
            {passwords.length} Saved
          </div>

        </div>

        <div className="overflow-x-auto rounded-xl border border-purple-200 bg-purple-50/40 sm:rounded-2xl">

          <table className="w-full min-w-[750px] border-collapse">

            <thead className="bg-gradient-to-r from-purple-600 to-violet-600 text-white">

              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold sm:px-6 sm:py-4 sm:text-sm">
                  Website
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold sm:px-6 sm:py-4 sm:text-sm">
                  Username
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold sm:px-6 sm:py-4 sm:text-sm">
                  Password
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold sm:px-6 sm:py-4 sm:text-sm">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {passwords.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-8 text-center sm:px-6 sm:py-12"
                  >
                    <div className="flex flex-col items-center gap-2">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-lg text-purple-500 sm:h-12 sm:w-12 sm:text-xl">
                        🔐
                      </div>

                      <p className="font-medium text-purple-800">
                        No passwords saved yet
                      </p>

                      <p className="text-xs text-gray-500 sm:text-sm">
                        Add your first password using the form above
                      </p>

                    </div>
                  </td>
                </tr>
              ) : (

                passwords.map((item, index) => (

                  <tr
                    key={index}
                    className="border-t border-purple-100 bg-white/70 transition duration-300 hover:bg-purple-50"
                  >

                    <td className="px-4 py-3 sm:px-6 sm:py-4">

                      <div className="flex items-center gap-2">

                        <span className="font-medium text-purple-900">
                          {item.site}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            copyToClipboard(item.site)
                          }
                          className="rounded-md p-1.5 text-purple-400 transition hover:bg-purple-100 hover:text-purple-700"
                          title="Copy website"
                        >
                          <Copy size={16} />
                        </button>

                      </div>

                    </td>

                    <td className="px-4 py-3 sm:px-6 sm:py-4">

                      <div className="flex items-center gap-2">

                        <span className="text-gray-600">
                          {item.username}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            copyToClipboard(item.username)
                          }
                          className="rounded-md p-1.5 text-purple-400 transition hover:bg-purple-100 hover:text-purple-700"
                          title="Copy username"
                        >
                          <Copy size={16} />
                        </button>

                      </div>

                    </td>

                    <td className="px-4 py-3 sm:px-6 sm:py-4">

                      <div className="flex items-center gap-2">

                        <span className="rounded-lg bg-purple-100 px-3 py-1.5 font-mono text-sm text-purple-700">
                          ••••••••
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            copyToClipboard(item.password)
                          }
                          className="rounded-md p-1.5 text-purple-400 transition hover:bg-purple-100 hover:text-purple-700"
                          title="Copy password"
                        >
                          <Copy size={16} />
                        </button>

                      </div>

                    </td>

                    <td className="px-4 py-3 sm:px-6 sm:py-4">

                      <div className="flex justify-center gap-2 sm:gap-3">

                        <button
                          type="button"
                          onClick={() => editPassword(index)}
                          className="rounded-lg border border-purple-200 bg-purple-50 p-2 text-purple-600 transition duration-300 hover:bg-purple-100 hover:text-purple-800"
                          title="Edit password"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={() => deletePassword(index)}
                          className="rounded-lg border border-red-100 bg-red-50 p-2 text-red-500 transition duration-300 hover:bg-red-100 hover:text-red-600"
                          title="Delete password"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>
</section>
);
};

export default Manager;
