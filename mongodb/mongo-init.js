db.createUser(
    {
        user: "kata",
        pwd: "amineTelli2021",
        roles: [
            {
                role: "readWrite",
                db: "katadb"
            }
        ]
    }
)