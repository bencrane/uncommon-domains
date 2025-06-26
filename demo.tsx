"use client"

import { useState } from "react"
import DomainListing from "./domain-listing"
import { Button } from "@/components/ui/button"

export default function Demo() {
  const [mode, setMode] = useState<"buy-now" | "auction">("buy-now")

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0E0E10" }}>
      {/* Demo Controls */}
      <div className="border-b p-4" style={{ backgroundColor: "#0E0E10", borderColor: "#1C1C1F" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant={mode === "buy-now" ? "default" : "outline"}
              onClick={() => setMode("buy-now")}
              className="font-semibold hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: mode === "buy-now" ? "#8B5CF6" : "transparent",
                borderColor: "#8B5CF6",
                color: mode === "buy-now" ? "white" : "#8B5CF6",
              }}
            >
              Buy Now Mode
            </Button>
            <Button
              variant={mode === "auction" ? "default" : "outline"}
              onClick={() => setMode("auction")}
              className="font-semibold hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: mode === "auction" ? "#EF4444" : "transparent",
                borderColor: "#EF4444",
                color: mode === "auction" ? "white" : "#EF4444",
              }}
            >
              Auction Mode
            </Button>
          </div>
        </div>
      </div>

      {/* Domain Listing Component */}
      <DomainListing
        mode={mode}
        domain="techstartup.com"
        price={8500}
        description="Perfect domain for technology startups and innovative companies. Short, memorable, and brandable with strong SEO potential."
        timeLeft={{ days: 1, hours: 2, minutes: 4, seconds: 51 }}
        biddingHistory={[
          { bidder: "Bidder X", date: "2025-06-26", amount: 8500 },
          { bidder: "Bidder Y", date: "2025-06-25", amount: 8000 },
          { bidder: "Bidder Z", date: "2025-06-25", amount: 7500 },
        ]}
      />
    </div>
  )
}
