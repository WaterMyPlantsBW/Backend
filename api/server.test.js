
const request = require("supertest")

const server = require("./server")

test("initial test", () => {
    expect(2 + 2).toBe(4)
})

describe("test endpoints", () => {
    test("can login", async () => {
        const res = request(server).post("/auth/login").send({
            username: "lambda",
            password: "school"
        })
        expect(res.statusType).toBe(200)
        expect(res.type).toBe("application/json")
    })
})
