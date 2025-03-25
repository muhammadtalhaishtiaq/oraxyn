
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getPendingApprovals, processApproval, getAllUsers, updatePassword } from '@/api/auth';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckCircle, XCircle, User, UserCog, Clock, Settings, UserPlus, Shield, Key } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminPage = () => {
  const { isAuthenticated, loading, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [pendingApprovals, setPendingApprovals] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [declineDialog, setDeclineDialog] = useState(false);
  const [userSettingsDialog, setUserSettingsDialog] = useState(false);
  const [resetPasswordDialog, setResetPasswordDialog] = useState(false);
  const [newRoleDialog, setNewRoleDialog] = useState(false);
  const [approving, setApproving] = useState(false);
  const [notes, setNotes] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newRole, setNewRole] = useState('');
  const [processingAction, setProcessingAction] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate('/login');
      } else if (!isAdmin) {
        toast({
          title: 'Access Denied',
          description: 'You do not have permission to access this page.',
          variant: 'destructive',
        });
        navigate('/dashboard');
      } else {
        loadData();
      }
    }
  }, [isAuthenticated, loading, isAdmin, navigate]);

  const loadData = async () => {
    setLoadingData(true);
    try {
      const [approvals, users] = await Promise.all([
        getPendingApprovals(),
        getAllUsers()
      ]);
      setPendingApprovals(approvals);
      setAllUsers(users);
    } catch (error) {
      console.error('Error loading admin data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoadingData(false);
    }
  };

  const handleApprove = async () => {
    if (!selectedRequest) return;
    
    setApproving(true);
    try {
      await processApproval(selectedRequest.id, selectedRequest.user_id, true, notes);
      toast({
        title: 'Approved',
        description: 'User account has been approved successfully.',
      });
      setDialogOpen(false);
      setSelectedRequest(null);
      setNotes('');
      loadData();
    } catch (error) {
      console.error('Error approving user:', error);
      toast({
        title: 'Error',
        description: 'Failed to approve user. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setApproving(false);
    }
  };

  const handleDecline = async () => {
    if (!selectedRequest) return;
    
    setApproving(true);
    try {
      await processApproval(selectedRequest.id, selectedRequest.user_id, false, notes);
      toast({
        title: 'Declined',
        description: 'User account has been declined.',
      });
      setDeclineDialog(false);
      setSelectedRequest(null);
      setNotes('');
      loadData();
    } catch (error) {
      console.error('Error declining user:', error);
      toast({
        title: 'Error',
        description: 'Failed to decline user. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setApproving(false);
    }
  };

  const handleResetPassword = async () => {
    if (!selectedUser) return;
    
    if (!newPassword || newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    setProcessingAction(true);
    try {
      await updatePassword(selectedUser.id, newPassword);
      toast({
        title: 'Password Reset',
        description: 'User password has been reset successfully.',
      });
      setResetPasswordDialog(false);
      setSelectedUser(null);
      setNewPassword('');
      setConfirmPassword('');
      setPasswordError('');
    } catch (error) {
      console.error('Error resetting password:', error);
      toast({
        title: 'Error',
        description: 'Failed to reset password. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setProcessingAction(false);
    }
  };

  const handleUpdateRole = async () => {
    if (!selectedUser || !newRole) return;
    
    setProcessingAction(true);
    try {
      // In a real app, this would be an API call to update the user's role
      // For this example, we'll simulate success and update local state
      
      const updatedUsers = allUsers.map(user => {
        if (user.id === selectedUser.id) {
          return { ...user, role: newRole };
        }
        return user;
      });
      
      setAllUsers(updatedUsers);
      
      toast({
        title: 'Role Updated',
        description: `User role has been updated to ${newRole}.`,
      });
      
      setNewRoleDialog(false);
      setSelectedUser(null);
      setNewRole('');
    } catch (error) {
      console.error('Error updating role:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user role. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setProcessingAction(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <Badge variant="outline" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'declined':
        return <Badge variant="outline" className="bg-red-100 text-red-800">Declined</Badge>;
      case 'pending':
      default:
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const getRoleBadge = (role) => {
    switch (role) {
      case 'admin':
        return <Badge className="bg-purple-100 text-purple-800">Admin</Badge>;
      default:
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">User</Badge>;
    }
  };

  if (loading || loadingData) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oraxyn-blue"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Admin Dashboard</h1>
          <p className="text-gray-500">
            Manage user accounts and approvals
          </p>
        </div>

        <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending Approvals
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              All Users
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Account Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCog className="mr-2 h-5 w-5" />
                  Pending Account Approvals
                </CardTitle>
                <CardDescription>
                  Review and approve new user registration requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                {pendingApprovals.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No pending approval requests
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Requested</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingApprovals.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">
                            {request.profiles.first_name} {request.profiles.last_name}
                          </TableCell>
                          <TableCell>{request.profiles.email}</TableCell>
                          <TableCell>{request.profiles.company || '-'}</TableCell>
                          <TableCell>{formatDate(request.requested_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                className="bg-green-600 hover:bg-green-700" 
                                onClick={() => {
                                  setSelectedRequest(request);
                                  setDialogOpen(true);
                                }}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => {
                                  setSelectedRequest(request);
                                  setDeclineDialog(true);
                                }}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Decline
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  All Users
                </CardTitle>
                <CardDescription>
                  View and manage all registered users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.firstName} {user.lastName}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.company || '-'}</TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.accountStatus)}</TableCell>
                        <TableCell>{formatDate(user.createdAt)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setSelectedUser(user);
                                setUserSettingsDialog(true);
                              }}
                            >
                              <Settings className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setSelectedUser(user);
                                setResetPasswordDialog(true);
                              }}
                            >
                              <Key className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Shield className="inline-block mr-2 h-5 w-5 text-oraxyn-purple" />
                    User Role Management
                  </CardTitle>
                  <CardDescription>
                    Manage user roles and permissions across the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Define what actions users can perform based on their role. Administrators have full access to all features.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h4 className="font-medium mb-1">Administrator</h4>
                      <p className="text-sm text-gray-600">Full access to all system features including user management, billing, and configuration.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <h4 className="font-medium mb-1">User</h4>
                      <p className="text-sm text-gray-600">Standard access to the Amazon dashboard, campaign management, and analytics.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    <UserPlus className="inline-block mr-2 h-5 w-5 text-oraxyn-blue" />
                    Account Approval Settings
                  </CardTitle>
                  <CardDescription>
                    Configure account approval workflow and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">Send email when account approval is requested</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oraxyn-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Auto-approve Trial Accounts</p>
                        <p className="text-sm text-gray-600">Automatically approve accounts for trial period</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oraxyn-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Require Company Information</p>
                        <p className="text-sm text-gray-600">Make company field mandatory during registration</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-oraxyn-blue"></div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Approve Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve User Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to approve this user account? They will gain access to the system.
            </DialogDescription>
          </DialogHeader>
          
          {selectedRequest && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p>{selectedRequest.profiles.first_name} {selectedRequest.profiles.last_name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{selectedRequest.profiles.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Company</p>
                  <p>{selectedRequest.profiles.company || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Requested</p>
                  <p>{formatDate(selectedRequest.requested_at)}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Admin Notes (Optional)</p>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any notes about this approval..."
                  className="w-full"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDialogOpen(false);
                setSelectedRequest(null);
                setNotes('');
              }}
              disabled={approving}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleApprove}
              disabled={approving}
              className="bg-green-600 hover:bg-green-700"
            >
              {approving ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Approve
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Decline Dialog */}
      <Dialog open={declineDialog} onOpenChange={setDeclineDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Decline User Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to decline this user account? They will not be able to access the system.
            </DialogDescription>
          </DialogHeader>
          
          {selectedRequest && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p>{selectedRequest.profiles.first_name} {selectedRequest.profiles.last_name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{selectedRequest.profiles.email}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Reason (Optional)</p>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add a reason for declining this user..."
                  className="w-full"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDeclineDialog(false);
                setSelectedRequest(null);
                setNotes('');
              }}
              disabled={approving}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDecline}
              disabled={approving}
              variant="destructive"
            >
              {approving ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center">
                  <XCircle className="h-4 w-4 mr-1" />
                  Decline
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* User Settings Dialog */}
      <Dialog open={userSettingsDialog} onOpenChange={setUserSettingsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Settings</DialogTitle>
            <DialogDescription>
              Manage settings for this user account
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-4 py-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p>{selectedUser.firstName} {selectedUser.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <p>{getRoleBadge(selectedUser.role)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <p>{getStatusBadge(selectedUser.accountStatus)}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setUserSettingsDialog(false);
                    setNewRoleDialog(true);
                    setNewRole(selectedUser.role || 'user');
                  }}
                  className="justify-start"
                >
                  <UserCog className="h-4 w-4 mr-2" />
                  Change User Role
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => {
                    setUserSettingsDialog(false);
                    setResetPasswordDialog(true);
                  }}
                  className="justify-start"
                >
                  <Key className="h-4 w-4 mr-2" />
                  Reset Password
                </Button>
                
                <Button 
                  variant={selectedUser.accountStatus === 'approved' ? 'destructive' : 'default'}
                  className="justify-start"
                  disabled={processingAction}
                  onClick={() => {
                    // In a real app, this would be an API call
                    // For this example, we'll simulate success
                    setProcessingAction(true);
                    setTimeout(() => {
                      const newStatus = selectedUser.accountStatus === 'approved' ? 'disabled' : 'approved';
                      const updatedUsers = allUsers.map(user => {
                        if (user.id === selectedUser.id) {
                          return { ...user, accountStatus: newStatus };
                        }
                        return user;
                      });
                      
                      setAllUsers(updatedUsers);
                      setUserSettingsDialog(false);
                      setSelectedUser(null);
                      setProcessingAction(false);
                      
                      toast({
                        title: newStatus === 'approved' ? 'Account Activated' : 'Account Disabled',
                        description: `User account has been ${newStatus === 'approved' ? 'activated' : 'disabled'}.`,
                      });
                    }, 1000);
                  }}
                >
                  {processingAction ? (
                    <span className="flex items-center">
                      <span className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full"></span>
                      Processing...
                    </span>
                  ) : (
                    <>
                      {selectedUser.accountStatus === 'approved' ? (
                        <>
                          <XCircle className="h-4 w-4 mr-2" />
                          Disable Account
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Enable Account
                        </>
                      )}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setUserSettingsDialog(false);
                setSelectedUser(null);
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Reset Password Dialog */}
      <Dialog open={resetPasswordDialog} onOpenChange={setResetPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>
              Set a new password for this user account
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-4 py-2">
              <div className="bg-gray-50 p-3 rounded-md mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p>{selectedUser.firstName} {selectedUser.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p>{selectedUser.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    disabled={processingAction}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    disabled={processingAction}
                  />
                </div>
                
                {passwordError && (
                  <div className="text-red-500 text-sm">{passwordError}</div>
                )}
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setResetPasswordDialog(false);
                setSelectedUser(null);
                setNewPassword('');
                setConfirmPassword('');
                setPasswordError('');
              }}
              disabled={processingAction}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleResetPassword}
              disabled={processingAction || !newPassword || !confirmPassword}
            >
              {processingAction ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                  Resetting...
                </span>
              ) : (
                <span className="flex items-center">
                  <Key className="h-4 w-4 mr-1" />
                  Reset Password
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Change Role Dialog */}
      <Dialog open={newRoleDialog} onOpenChange={setNewRoleDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change User Role</DialogTitle>
            <DialogDescription>
              Set a new role for this user account
            </DialogDescription>
          </DialogHeader>
          
          {selectedUser && (
            <div className="space-y-4 py-2">
              <div className="bg-gray-50 p-3 rounded-md mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p>{selectedUser.firstName} {selectedUser.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p>{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Current Role</p>
                    <p>{getRoleBadge(selectedUser.role)}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">New Role</Label>
                <Select onValueChange={setNewRole} defaultValue={selectedUser.role || 'user'}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setNewRoleDialog(false);
                setSelectedUser(null);
                setNewRole('');
              }}
              disabled={processingAction}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleUpdateRole}
              disabled={processingAction || !newRole || (selectedUser && newRole === selectedUser.role)}
            >
              {processingAction ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                  Updating...
                </span>
              ) : (
                <span className="flex items-center">
                  <UserCog className="h-4 w-4 mr-1" />
                  Update Role
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminPage;
