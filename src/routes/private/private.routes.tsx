import { Routes, Route } from "react-router-dom";
import { ExamApplicationRoutes } from "./exam-application/exam-application.routes";
import { AdminLayout } from "../../layouts/admin/admin.layout";
import { DashboardPage } from "../../pages/private/pages/dashboard/dashboard.page";

export function PrivateRoutes() {
  return (
    <>
      <Routes>
        <Route Component={AdminLayout}>
          <Route path="exam-applications/*" Component={ExamApplicationRoutes} />

          <Route path="/" Component={DashboardPage} />
        </Route>
      </Routes>
    </>
  )
}