import { DomNode } from "common-dapp-module";
import NFTCollection from "../../../datamodel/NFTCollection.js";
import MessageInput from "./MessageInput.js";
import MessageList from "./MessageList.js";

export default class ChatRoom extends DomNode {
  private messageList: MessageList;
  private messageInput: MessageInput;

  constructor() {
    super(".chat-room");

    this.append(
      this.messageList = new MessageList(),
      this.messageInput = new MessageInput(this.messageList),
    );
  }

  public set roomId(roomId: string | undefined) {
    this.messageList.roomId = roomId;
  }

  public checkingNFTOwned() {
    this.messageInput.checkingNFTOwned();
  }

  public setNFTOwned(
    b: boolean,
    collection?: NFTCollection,
    profile?: any,
  ) {
    this.messageInput.setNFTOwned(b, collection, profile);
  }

  public active(): void {
    this.addClass("active");
  }

  public inactive(): void {
    this.deleteClass("active");
  }

  public showMessageBox() {
    this.messageInput.showMessageBox();
  }
}
