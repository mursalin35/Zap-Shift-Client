import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Auth from "../layouts/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashBoard from "../layouts/DashBoard";
import MyParcels from "../pages/DashBoard/MyParcels";
import Payment from "../pages/DashBoard/Payment";
import PaymentSuccess from "../pages/DashBoard/PaymentStatus/PaymentSuccess";
import PaymentCancel from "../pages/DashBoard/PaymentStatus/PaymentCancel";
import PaymentHistory from "../pages/DashBoard/PaymentStatus/PaymentHistory";
import ApproveRiders from "../pages/DashBoard/ApproveRiders";
import UsersManagement from "../pages/DashBoard/UsersManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("/public/warehouses.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("/public/warehouses.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () =>
          fetch("/public/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: Auth,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancel,
      },
      {
        path: "approve-riders",
        Component: ApproveRiders,
      },
      {
        path: "users-management",
        Component: UsersManagement,
      },
    ],
  },
]);
