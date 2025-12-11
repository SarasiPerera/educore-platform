"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EditProfile() {
  const [username, setUsername] = useState("sarasi123");
  const [firstName, setFirstName] = useState("Sarasi");
  const [lastName, setLastName] = useState("Perera");
  const [email, setEmail] = useState("sarasi@example.com");
  const [phone, setPhone] = useState("0771234567");
  const [bio, setBio] = useState("Student at EduCore");
  const [country, setCountry] = useState("Sri Lanka");

  const [passwordDialog, setPasswordDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  // simple success message
  const [message, setMessage] = useState("");

  const handleSave = () => {
    setMessage("✔ Profile updated successfully!");
    setTimeout(() => setMessage(""), 2500);
  };

  const handlePasswordChange = () => {
    setMessage("✔ Password updated successfully!");
    setPasswordDialog(false);
    setTimeout(() => setMessage(""), 2500);
  };

  const handleAccountDelete = () => {
    setMessage("✔ Account deleted permanently.");
    setDeleteDialog(false);
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Profile</h1>

        {/* Success Message */}
        {message && (
          <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-md text-center font-medium">
            {message}
          </div>
        )}

        {/* Profile Photo */}
        <div className="flex items-center gap-6 mb-10">
          <img
            src="https://via.placeholder.com/90"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <Button variant="outline">Change Photo</Button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-medium">First Name</label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Last Name</label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Username</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Phone Number</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Country</label>

            <Select onValueChange={setCountry} defaultValue={country}>
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6">
          <label className="font-medium">Bio</label>
          <Textarea
            rows={4}
            maxLength={250}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <p className="text-xs text-gray-500 text-right">{bio.length}/250</p>
        </div>

        {/* Save Button */}
        <Button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700"
          onClick={handleSave}
        >
          Save Changes
        </Button>

        {/* Password & Delete */}
        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={() => setPasswordDialog(true)}>
            Change Password
          </Button>

          <Button variant="destructive" onClick={() => setDeleteDialog(true)}>
            Delete Account
          </Button>
        </div>

        {/* Change Password Modal */}
        <Dialog open={passwordDialog} onOpenChange={setPasswordDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>

            <Input
              type="password"
              placeholder="Current Password"
              className="mt-3"
            />
            <Input
              type="password"
              placeholder="New Password"
              className="mt-3"
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              className="mt-3"
            />

            <DialogFooter>
              <Button onClick={handlePasswordChange}>Update Password</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Account Modal */}
        <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Account Delete</DialogTitle>
            </DialogHeader>

            <p className="text-gray-600">
              This action is permanent. Are you sure you want to delete your
              account?
            </p>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteDialog(false)}>
                Cancel
              </Button>

              <Button variant="destructive" onClick={handleAccountDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
