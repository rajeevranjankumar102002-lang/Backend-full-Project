class APIResponse extends Response {
    constructor(statecode,data,message ="success")
    {
        super();
        this.statecode = statecode;
        this.data = data;
        this.message = message;
        this.success = statecode < 400;
    }
}

export { APIResponse }
