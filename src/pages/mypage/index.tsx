/** @format */

import { AuthGuard } from "src/feature/auth/component/AuthGuard/AuthGuard";
const Mypage = () => {
  return (
    <AuthGuard>
      <div>tttt</div>
    </AuthGuard>
  );
};

export default Mypage;
