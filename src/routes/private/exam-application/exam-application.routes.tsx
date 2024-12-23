import { Route, Routes } from "react-router-dom";
import { ExamApplicationDetailPage } from "../../../pages/private/pages/exam-application/exam-application-detail/exam-application-detail.page";
import { ExamApplicationListPage } from "../../../pages/private/pages/exam-application/exam-application-list/exam-application-list.page";

export function ExamApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" Component={ExamApplicationListPage} />
      <Route path="/:id" Component={ExamApplicationDetailPage} />
    </Routes>
  )
}