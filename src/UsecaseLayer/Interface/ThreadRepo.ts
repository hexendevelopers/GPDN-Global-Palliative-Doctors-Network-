import IThread from "../../DomainLayer/ThreadsDomain";


interface ThreadRepo {

    addThread(thread:IThread):Promise<IThread>;

  
}

export default ThreadRepo;