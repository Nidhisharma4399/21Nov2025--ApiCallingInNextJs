"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="container py-5">
      <h1 className="text-center mb-4">Welcome</h1>

      <div className="row g-3 justify-content-center">

        <div className="col-md-4">
          <Link href="/posts" className="btn btn-primary w-100 py-3">
            Posts
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/comments" className="btn btn-success w-100 py-3">
            Comments
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/albums" className="btn btn-warning w-100 py-3">
            Albums
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/photos" className="btn btn-info w-100 py-3">
            Photos
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/todos" className="btn btn-secondary w-100 py-3">
            Todos
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/users" className="btn btn-dark w-100 py-3">
            Users
          </Link>
        </div>

        

      </div>
    </div>
    </>
  );
}
