"use client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Alert } from "@/components/Alert";

export default function MNS01() {
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRetypePassword, setErrorRetypePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const handleSubmit = () => {
    if (password.trim() === "") {
      setErrorPassword("新しいパスワードを入力してください。");
    } else if (retypePassword.trim() === "") {
      setErrorRetypePassword("新しいパスワードを再入力してください。");
    } else {
      setErrorPassword("");
      setErrorRetypePassword("");
    }
  };

  return (
    <div className="w-full h-[1080px] bg-[#103651]">
      <div className="w-full pt-[180px] gap-[50px] flex flex-col justify-between">
        <p className="text-center text-[#C1A98A] text-[70px] font-semibold">
          外国漁船漁獲情報システム
        </p>
        <div className="w-[800px] min-h-[360px] max-h-[800px] flex flex-col items-center justify-between py-[80px] rounded-[20px] gap-[40px] bg-white mx-auto">
          {errorPassword && errorRetypePassword && (
            <Alert type="error" message="入力内容に誤りがあります。" />
          )}
          <div className="w-[540px] flex flex-row justify-between">
            <label className="min-w-[128px] text-[16px] text-black font-normal">
              新しいパスワード
            </label>
            <div className="relative h-[34px] w-[352px]">
              <div className="flex flex-row">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-[352px] h-[34px] rounded-[8px] min-w-[250px] gap-[10px] border ${
                    errorPassword
                      ? "border-[#DC3545] shadow-[0_0_0_4px_rgba(239,68,68,0.25)]"
                      : "border-[#DDE1EB] "
                  } py-[3px] px-[10px]`}
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#60656E] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEye width={25} height={20} />
                  ) : (
                    <FaRegEyeSlash width={25} height={20} />
                  )}
                </div>
              </div>
              <div>
                {errorPassword && (
                  <p className="text-[#DC3545] text-[16px] font-medium mt-[4px]">
                    {errorPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-[540px] gap-[60px] flex flex-row justify-between">
            <label className="min-w-[128px] text-[16px] text-black font-normal">
              パスワード再入力
            </label>
            <div className="relative h-[34px] w-[352px]">
              <div className="flex flex-row">
                <input
                  type="password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  className={`w-[352px] rounded-[8px] min-w-[250px] gap-[10px] border ${
                    errorRetypePassword
                      ? "border-[#DC3545] shadow-[0_0_0_4px_rgba(239,68,68,0.25)]"
                      : "border-[#DDE1EB] "
                  } py-[3px] px-[10px]`}
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#60656E] cursor-pointer"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                >
                  {showRetypePassword ? (
                    <FaRegEye width={25} height={20} />
                  ) : (
                    <FaRegEyeSlash width={25} height={20} />
                  )}
                </div>
              </div>
              <div>
                {errorRetypePassword && (
                  <p className="text-[#DC3545] text-[16px] font-medium mt-[4px]">
                    {errorRetypePassword}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center" onClick={handleSubmit}>
            <Button content="設定"></Button>
          </div>
          <div>
            <a
              href="#"
              className="text-center text-[16px] text-[#0057B8] font-normal underline"
            >
              ログインに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
