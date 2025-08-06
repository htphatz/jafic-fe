"use client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (username.trim() === "") {
      setError("ログインIDに⁩誤りがあります。");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full h-[1080px] bg-[#103651]">
      <div className="w-full pt-[180px] gap-[50px] flex flex-col justify-between">
        <p className="text-center text-[#C1A98A] text-[70px] font-semibold">
          外国漁船漁獲情報システム
        </p>
        <div className="w-[800px] h-[360px] flex flex-col items-center justify-between py-[80px] rounded-[20px] gap-[20px] bg-white mx-auto">
          <div className="w-[540px] gap-[90px] flex flex-row justify-between">
            <label className="text-[16px] text-black font-normal">
              ログインID
            </label>
            <div className="flex flex-col gap-[4px]">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-[352px] h-[34px] rounded-[8px] min-w-[250px] gap-[10px] border ${
                  error
                    ? "border-[#DC3545] shadow-[0_0_0_4px_rgba(239,68,68,0.25)]"
                    : "border-[#DDE1EB] "
                } py-[3px] px-[10px]`}
              />
              {error && (
                <p className="text-[#DC3545] text-[16px] font-medium">
                  {error}
                </p>
              )}
            </div>
          </div>

          <div className="w-[540px] h-[34px] gap-[90px] flex flex-row justify-between">
            <label className="text-[16px] text-black font-normal">
              パスワード
            </label>
            <div className="relative h-[34px] w-[352px]">
              <input
                type="password"
                className="w-full h-full rounded-[8px] min-w-[250px] border-[1px] border-[#DDE1EB] py-[3px] px-[10px]"
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
          </div>
          <div
            className="flex justify-center rounded-[8px] text-white bg-[#0C8CE9]"
            onClick={handleSubmit}
          >
            <Button content="ログイン"></Button>
          </div>
          <div>
            <a
              href="#"
              className="text-center text-[16px] text-[#0057B8] font-normal underline"
            >
              パスワード⁩をリセット
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
