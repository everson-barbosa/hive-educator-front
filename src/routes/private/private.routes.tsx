import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/layouts/admin/admin.layout";

const DashboardPage = lazy(() => import('@/pages/private/pages/dashboard/dashboard.page'))
const ExamApplicationDetailPage = lazy(() => import('@/pages/private/pages/exam-application/exam-application-detail/exam-application-detail.page'))
const ExamApplicationListPage = lazy(() => import("@/pages/private/pages/exam-application/exam-application-list/exam-application-list.page"))

export function PrivateRoutes() {
  return (
    <>
      <Routes>
        <Route Component={AdminLayout}>
          <Route path="/exam-applications" Component={ExamApplicationListPage} />
          <Route path="/exam-applications/:id" Component={ExamApplicationDetailPage} />

          <Route path="/" Component={DashboardPage} />
        </Route>
      </Routes>
    </>
  )
}