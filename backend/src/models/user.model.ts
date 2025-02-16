import mongoose,{Document, Schema} from "mongoose";
import { hashPassword as hashValue, comparePassword as compareValue } from "../utils/bcrypt";

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    profileImage: string | null;
    isActive: boolean;
    lastLogin: Date | null;
    createdAt: Date;
    updatedAt: Date;
    currentWorkspace: mongoose.Types.ObjectId | null;
    comparePassword: (password: string) => Promise<boolean>;
    omitPassword: () => Omit<UserDocument, 'password'>;
    
}


const userSchema = new Schema<UserDocument>({
    name: { type: String,
       required: true ,
        trim: true,
    },
    email: { 
        type: String,
         required: true, 
         unique: true
         },
    password: { type: String, 
      select: true },
    profileImage:{
        type: String,
        default: null
    
    },
    currentWorkspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date,
        default: null
    }
},{
    timestamps: true,
}
);

  userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      if (this.password) {
        this.password = await hashValue(this.password);
      }
    }
    next();
  });
  
  userSchema.methods.omitPassword = function (): Omit<UserDocument, "password"> {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
  };
  
  userSchema.methods.comparePassword = async function (value: string) {
    return compareValue(value, this.password);
  };
  
  const UserModel = mongoose.model<UserDocument>("User", userSchema);
  export default UserModel;
