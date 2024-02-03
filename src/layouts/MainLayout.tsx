import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default MainLayout
