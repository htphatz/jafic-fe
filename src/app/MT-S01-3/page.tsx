import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import TabSwitcher from "@/components/Tab";
import UserTable from "@/components/UserTable";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="w-full min-h-[936px] flex flex-col p-[30px] gap-[15px]">
        <TabSwitcher />

        <div className="flex justify-end text-[#0C8CE9] bg-white rounded-[8px]">
          <Button content={"+ユーザー追加"}></Button>
        </div>

        {/* Filter section */}
        <div className="w-full h-[223px] border border-black">
          <div className="w-full h-[60px] border-b border-black">
            <div className="min-w-[120px] flex items-center px-[20px] py-[10px] text-[20px] font-normal">
              ユーザー検索
            </div>
          </div>
          <div className="w-full flex flex-row gap-[15px] px-[20px] pt-[20px] pb-[10px]">
            <div className="w-[250px] h-[68px] flex flex-col">
              <label>ログインID</label>
              <input className="min-w-[100px] h-[12px] border border-[#FFFFF] px-[3px] py-[10px] rounded-[8px]" />
            </div>
            <div className="w-[250px] h-[68px] flex flex-col">
              <label>ユーザー名</label>
              <input className="min-w-[100px] h-[12px] border border-[#FFFFF] px-[3px] py-[10px] rounded-[8px]" />
            </div>
            <div className="w-[250px] h-[68px] flex flex-col">
              <label>メールアドレス</label>
              <input className="min-w-[100px] h-[12px] border border-[#FFFFF] px-[3px] py-[10px] rounded-[8px]" />
            </div>
            <div className="w-[250px] h-[68px] flex flex-col">
              <label>権限</label>
              <select className="min-w-[100px] h-[12px] border border-[#FFFFF] px-[3px] py-[10px] rounded-[8px]"></select>
            </div>
            <div className="w-[250px] h-[68px] flex flex-col">
              <label>所属</label>
              <input className="min-w-[100px] h-[12px] border border-[#FFFFF] px-[3px] py-[10px] rounded-[8px]" />
            </div>
          </div>
          <div className="w-full flex justify-end px-[20px] mt-auto">
            <div className="w-[166px] text-white bg-[#0C8CE9] rounded-[8px]">
              <Button content={"検索"} />
            </div>
          </div>
        </div>

        {/* Table section */}
        <div className="w-full h-[518px] border border-black">
          <div className="w-full h-[60px] border-b border-black">
            <div className="min-w-[120px] flex items-center px-[20px] py-[10px] text-[20px] font-normal">
              検索結果
            </div>
          </div>
          <div className="h-[363px] px-[10px] py-[20px]">
            <UserTable />
          </div>
          <div className="w-full flex justify-end px-[20px] mt-[30px]">
            <div className="w-[166px] text-white bg-[#0C8CE9] rounded-[8px]">
              <Button content={"出力"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
