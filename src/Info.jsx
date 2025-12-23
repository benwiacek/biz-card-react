function Info() {
    return (
        <header>
            <img className="profile-pic" src="./profile.jpg" alt="Photo of Ben" />
            <h1>Ben Wiacek</h1>
            <p className="subheading">Front-End Developer in Training</p>
            <a className="site-link" href="https://benwiacek.github.io/">benwiacek.github.io</a>
            <div className="links-btns">
                <a className="link-btn email" href="mailto:fakeaddress@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </a>
                <a className="link-btn linkedin" href="https://www.linkedin.com/in/benjamin-wiacek/">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>
    )
}

export default Info