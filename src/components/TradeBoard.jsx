import React, { useState } from "react";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal,
  ChevronRight,
  Lock,
  Unlock,
  Star,
} from "lucide-react";

const TradeBoard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const columns = [
    {
      id: "todo",
      title: "To Start",
      trades: [
        {
          id: "trade-1",
          title: "Website landing page design",
          priority: "high",
          type: "design",
          trader: "Alex C.",
          avatar: "/api/placeholder/24/24",
          isLocked: false,
        },
        {
          id: "trade-2",
          title: "Write newsletter content",
          priority: "medium",
          type: "content",
          trader: "Sarah M.",
          avatar: "/api/placeholder/24/24",
          isLocked: false,
        },
      ],
    },
    {
      id: "inprogress",
      title: "Building",
      trades: [
        {
          id: "trade-3",
          title: "Create logo variations",
          priority: "high",
          type: "design",
          trader: "Alex C.",
          avatar: "/api/placeholder/24/24",
          isLocked: false,
        },
      ],
    },
    {
      id: "milestones",
      title: "Verification",
      trades: [
        {
          id: "trade-4",
          title: "Homepage wireframe",
          priority: "high",
          type: "design",
          trader: "Sarah M.",
          avatar: "/api/placeholder/24/24",
          isLocked: true,
          milestone: "1 of 3",
          needsReview: true,
        },
        {
          id: "trade-5",
          title: "About page design",
          priority: "medium",
          type: "design",
          trader: "Alex C.",
          avatar: "/api/placeholder/24/24",
          isLocked: true,
          milestone: "2 of 3",
          needsReview: false,
        },
      ],
    },
    {
      id: "done",
      title: "Completed",
      trades: [
        {
          id: "trade-6",
          title: "Brand identity guidelines",
          priority: "medium",
          type: "design",
          trader: "Alex C.",
          avatar: "/api/placeholder/24/24",
          rating: 5,
        },
      ],
    },
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return {
          icon: <AlertCircle size={12} />,
          color: "text-red-600 dark:text-red-400",
        };
      case "medium":
        return {
          icon: <Clock size={12} />,
          color: "text-yellow-600 dark:text-yellow-400",
        };
      default:
        return {
          icon: <CheckCircle size={12} />,
          color: "text-blue-600 dark:text-blue-400",
        };
    }
  };

  const getTypeBadge = (type) => {
    const colors = {
      design:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
      dev: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
      content:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
      planning:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    };

    return (
      colors[type] ||
      "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400"
    );
  };

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg border ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`px-4 py-3 border-b ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-2">
              <span className="text-white text-xs font-bold">SC</span>
            </div>
            <h3 className="font-semibold text-sm">SwapCrew Trade Board</h3>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1 rounded-md ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-400 hover:text-gray-300"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              }`}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto p-3 gap-3">
        {columns.map((column, colIndex) => (
          <div
            key={column.id}
            className={`flex-shrink-0 w-64 rounded-lg ${
              isDarkMode ? "bg-gray-750" : "bg-gray-50"
            } relative`}
          >
            <div className="px-3 py-2 flex justify-between items-center">
              <div className="flex items-center">
                <h4 className="font-medium text-sm">{column.title}</h4>
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {column.trades.length}
                </span>
              </div>
              <button
                className={`p-1 rounded-md ${
                  isDarkMode
                    ? "hover:bg-gray-700 text-gray-400"
                    : "hover:bg-gray-200 text-gray-500"
                }`}
              >
                <MoreHorizontal size={14} />
              </button>
            </div>

            <div className="p-2 space-y-2">
              {column.trades.map((trade) => (
                <div
                  key={trade.id}
                  className={`p-2 rounded-md shadow-sm border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-200"
                  } cursor-pointer transition-all duration-200 hover:shadow-md relative`}
                >
                  {trade.isLocked && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <Lock
                        size={12}
                        className="text-gray-700 dark:text-gray-300"
                      />
                    </div>
                  )}

                  <div className="mb-2 font-medium text-sm">{trade.title}</div>

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center text-xs space-x-1 ${
                        getPriorityBadge(trade.priority).color
                      }`}
                    >
                      {getPriorityBadge(trade.priority).icon}
                      <span className="ml-1">{trade.priority}</span>
                    </span>

                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-md ${getTypeBadge(
                        trade.type
                      )}`}
                    >
                      {trade.type}
                    </span>
                  </div>

                  {trade.milestone && (
                    <div
                      className={`mb-2 text-xs py-1 px-2 rounded ${
                        isDarkMode ? "bg-gray-600" : "bg-gray-100"
                      } flex justify-between items-center`}
                    >
                      <span>Milestone {trade.milestone}</span>
                      {trade.needsReview && (
                        <span className="text-orange-500 dark:text-orange-400 font-medium">
                          Review
                        </span>
                      )}
                    </div>
                  )}

                  {trade.rating && (
                    <div className="mb-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < trade.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  )}

                  {/* Trader info */}
                  <div className="flex items-center mt-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      {/* <img
                        src={trade.avatar}
                        alt={trade.trader}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                    <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                      {trade.trader}
                    </span>
                  </div>
                </div>
              ))}

              <button
                className={`w-full py-1 text-xs flex items-center justify-center ${
                  isDarkMode
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-500 hover:bg-gray-100"
                } rounded transition-colors`}
              >
                <span className="text-lg mr-1">+</span> Add trade
              </button>
            </div>

            {colIndex < columns.length - 1 && (
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeBoard;
