import React from "react";

const users = [
  {
    id: "aaa1234",
    name: "山田太郎",
    email: "t-yamada@aaa.co.jp",
    password: "aaaabbbb1111",
    role: "管理者",
    department: "JAFIC",
  },
  {
    id: "bbbb2346",
    name: "鈴木一郎",
    email: "i-zuzuki607@bbb.co.jp",
    password: "aaaabbbb1111",
    role: "出力用",
    department: "水産庁",
  },
  {
    id: "aaa1234",
    name: "山田太郎",
    email: "t-yamada@aaa.co.jp",
    password: "aaaabbbb1111",
    role: "管理者",
    department: "JAFIC",
  },
  {
    id: "bbbb2346",
    name: "鈴木一郎",
    email: "i-zuzuki607@bbb.co.jp",
    password: "aaaabbbb1111",
    role: "出力用",
    department: "水産庁",
  },
  {
    id: "aaa1234",
    name: "山田太郎",
    email: "t-yamada@aaa.co.jp",
    password: "aaaabbbb1111",
    role: "管理者",
    department: "JAFIC",
  },
  {
    id: "bbbb2346",
    name: "鈴木一郎",
    email: "i-zuzuki607@bbb.co.jp",
    password: "aaaabbbb1111",
    role: "出力用",
    department: "水産庁",
  },
];

const columns = [
  {
    name: "山田太郎",
  },
  {
    name: "ユーザーID",
  },
  {
    name: "ユーザー名",
  },
  {
    name: "メールアドレス",
  },
  {
    name: "初期パスワード",
  },
  {
    name: "権限",
  },
  {
    name: "所属",
  },
];

const UserTable = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <a
          href="#"
          className="text-center text-[16px] text-[#0057B8] font-normal underline"
        >
          削除
        </a>
        <div className="font-semibold text-[16px] text-black">
          1 - 6 件 / 全 100 件
        </div>
      </div>
      {/* Table */}
      <div className="rounded-[8px] w-[1820px] h-[293px]">
        <table className="text-sm text-left border-[#FFFFFF00]">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    key={column.name}
                    className="p-2 border text-center min-w-[260px]"
                  >
                    {column.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-2 border text-blue-600 underline cursor-pointer">
                  {u.id}
                </td>
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.password}</td>
                <td className="p-2 border">{u.role}</td>
                <td className="p-2 border">{u.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end px-[20px] py-[10px]">
        <div className="flex gap-[5px] items-center">
          <button>{"<<"}</button>
          <button>{"<"}</button>
          <button className="border px-[8px] py-[2px] rounded bg-blue-100 text-blue-600">
            1
          </button>
          <button>2</button>
          <button>…</button>
          <button>10</button>
          <button>{">"}</button>
          <button>{">>"}</button>
        </div>
      </div>
    </>
  );
};

export default UserTable;
