export default function SettingsBefore() {
  return (
    <div className="min-h-screen bg-gray-100 p-[13px]">
      <div className="mx-auto max-w-[900px] bg-white p-[22px]">
        <h1 className="text-lg font-bold text-black">Settings</h1>
        <p className="mt-[5px] text-lg font-bold text-black">
          Manage your Pulse workspace settings and preferences here.
        </p>

        {/* Workspace section */}
        <h2 className="mt-[9px] text-lg font-bold text-blue-600">Workspace</h2>

        <div className="mt-[14px] flex items-center gap-[10px]">
          <label className="w-[110px] text-center text-sm font-bold text-black">
            Workspace name
          </label>
          <input
            className="w-[300px] border border-gray-300 p-[5px] text-sm"
            defaultValue="Acme Inc"
          />
        </div>

        <div className="mt-[6px] flex items-center gap-[19px]">
          <label className="w-[90px] text-sm font-bold text-black">
            Workspace URL
          </label>
          <input
            className="w-[420px] border border-gray-300 p-[9px] text-sm"
            defaultValue="pulse.app/acme"
          />
        </div>

        <div className="mt-[17px] flex items-start gap-[10px]">
          <label className="text-sm font-bold text-black">Description</label>
          <textarea
            className="ml-[37px] w-[350px] border border-gray-300 p-[5px] text-sm"
            rows={3}
            defaultValue="Collect feedback from customers and share our public roadmap."
          />
        </div>

        <button className="mt-[11px] ml-[130px] bg-blue-600 px-[13px] py-[5px] text-sm font-bold text-white">
          Save workspace
        </button>

        {/* Notifications section */}
        <h2 className="mt-[21px] text-lg font-bold text-blue-600">
          Notifications
        </h2>

        <div className="mt-[7px] flex justify-between">
          <span className="text-sm font-bold text-black">
            Email me when someone votes on my feedback
          </span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="mt-[15px] flex">
          <input type="checkbox" />
          <span className="ml-[4px] text-sm font-bold text-black">
            Weekly roadmap digest
          </span>
        </div>

        <div className="mt-[3px] text-right">
          <span className="text-sm font-bold text-black">
            Notify me on new comments
          </span>
          <input type="checkbox" className="ml-[12px]" defaultChecked />
        </div>

        <button className="mt-[9px] bg-blue-600 px-[20px] py-[8px] text-sm font-bold text-white">
          Save notifications
        </button>

        {/* Danger zone */}
        <h2 className="mt-[13px] text-lg font-bold text-blue-600">
          Danger zone
        </h2>
        <p className="mt-[2px] text-sm font-bold text-black">
          Deleting the workspace will permanently remove all feedback boards,
          votes and roadmap items. This cannot be undone.
        </p>

        <div className="mt-[8px] flex gap-[6px]">
          <button className="bg-blue-600 px-[13px] py-[5px] text-sm font-bold text-white">
            Export data
          </button>
          <button className="bg-blue-600 px-[16px] py-[7px] text-sm font-bold text-white">
            Delete workspace
          </button>
        </div>
      </div>
    </div>
  );
}