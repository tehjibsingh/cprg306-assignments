"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Week10Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <div>
            <header>
                <nav>
                    {user ? (
                        <div className="p-4 bg-neutral-900 text-white">
                            <h1 className="text-2xl">
                                Welcome to Week 10
                            </h1>
                            <h1>
                                Signed in as {user.displayName} ({user.email}).
                            </h1>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="/week-10/shopping-list"
                                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                                >
                                    Go to Shopping List
                                </a>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center space-y-4">
                            <h1 className="text-2xl">Welcome to Week 10</h1>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={login}
                            >
                                Sign in with GitHub
                            </button>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}
