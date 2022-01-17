import React from "react";

export default function Tabel() {
  return (
    <table className="border-b border-gray-200 shadow">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-2 text-xs text-gray-500">ID</th>
          <th className="px-6 py-2 text-xs text-gray-500">Name</th>
          <th className="px-6 py-2 text-xs text-gray-500">Compelete</th>
          <th className="px-6 py-2 text-xs text-gray-500">Done's</th>
          <th className="px-6 py-2 text-xs text-gray-500">UnDone's</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="whitespace-nowrap">
          <td className="px-6 py-4 text-sm text-gray-500">1</td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900">Jon doe</div>
          </td>

          <td className="px-6 py-4 text-sm text-gray-500">is Complete</td>
          <td className="px-6 py-4">
            <span className="px-4 py-1 text-sm text-white bg-blue-400 rounded">
              Edit
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="px-4 py-1 text-sm text-white bg-red-400 rounded">
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
