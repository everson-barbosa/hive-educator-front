import { Route } from "react-router-dom";
import { ExamApplicationRoutes } from "./exam-application/exam-application.routes";
import { AdminLayout } from "../../layouts/admin/admin.layout";

export function AdminRoutes() {
  return (
    <Route element={<AdminLayout />}>
      <ExamApplicationRoutes />
    </Route>
  )
}