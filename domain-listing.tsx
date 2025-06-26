"use client"

import { useState } from "react"
import { Shield, Zap, TrendingUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface DomainListingProps {
  mode: "buy-now" | "auction"
  domain: string
  price: number
  description: string
  timeLeft?: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
  biddingHistory?: Array<{
    bidder: string
    date: string
    amount: number
  }>
}

export default function DomainListing({
  mode = "buy-now",
  domain = "techstartup.com",
  price = 8500,
  description = "Perfect domain for technology startups and innovative companies. Short, memorable, and brandable with strong SEO potential.",
  timeLeft = { days: 1, hours: 2, minutes: 4, seconds: 51 },
  biddingHistory = [
    { bidder: "Bidder X", date: "2025-06-26", amount: 8500 },
    { bidder: "Bidder Y", date: "2025-06-25", amount: 8000 },
    { bidder: "Bidder Z", date: "2025-06-25", amount: 7500 },
  ],
}: DomainListingProps) {
  const [activeTab, setActiveTab] = useState("description")
  const [isBidOpen, setBidOpen] = useState(false)
  const [isOfferOpen, setOfferOpen] = useState(false)
  const [bidAmount, setBidAmount] = useState(price + 100)
  const [offerAmount, setOfferAmount] = useState(price)
  const { toast } = useToast()

  const formatPrice = (amt: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amt)

  const formatTimeLeft = () =>
    timeLeft ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : ""

  const domainInfo = [
    { label: "Established", value: "2014" },
    { label: "Monthly search traffic", value: "1,200" },
    { label: "Category", value: "Technology" },
  ]

  const handleConfirmBid = () => {
    toast({
      title: "Bid Placed!",
      description: `Your bid of ${formatPrice(bidAmount)} has been placed.`,
    })
    setBidOpen(false)
  }

  const handleSendOffer = () => {
    toast({
      title: "Offer Sent!",
      description: `Your offer of ${formatPrice(offerAmount)} has been sent to the seller.`,
    })
    setOfferOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <header className="border-b border-[#1C1C1F]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-white">Uncommon Domains</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column Container */}
          <div className="flex flex-col h-full space-y-8">
            {/* Card A: Domain Thumbnail */}
            <Card
              className="shadow-lg border rounded-xl flex flex-col flex-1"
              style={{
                backgroundColor: "#1C1C1F",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <CardContent className="p-8 flex flex-col justify-between flex-1">
                <div
                  className="w-full h-48 rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
                  }}
                >
                  <img
                    src="/placeholder.svg?height=120&width=200"
                    alt="Domain thumbnail"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white text-center">{domain}</h2>
              </CardContent>
            </Card>

            {/* Card B: What's Included */}
            <Card
              className="shadow-lg border rounded-xl flex flex-col flex-1"
              style={{
                backgroundColor: "#1C1C1F",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <CardContent className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-lg text-[#C2C2C5]">
                      <Shield className="w-6 h-6 text-[#8B5CF6]" />
                      Full ownership transfer
                    </li>
                    <li className="flex items-center gap-4 text-lg text-[#C2C2C5]">
                      <Zap className="w-6 h-6 text-[#8B5CF6]" />
                      Escrow service
                    </li>
                    <li className="flex items-center gap-4 text-lg text-[#C2C2C5]">
                      <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />
                      Strategic GTM plan
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column Container */}
          <div className="flex flex-col h-full space-y-8">
            {/* Card C: Purchase/Auction Actions */}
            <Card
              className="shadow-lg border rounded-xl flex flex-col flex-1"
              style={{
                backgroundColor: "#1C1C1F",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <CardContent className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="mb-8">
                    {mode === "buy-now" ? (
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-semibold border-2"
                        style={{
                          color: "#FACC15",
                          borderColor: "#FACC15",
                          backgroundColor: "rgba(250,204,21,0.1)",
                        }}
                      >
                        Available for Purchase
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-semibold border-2"
                        style={{
                          color: "#EF4444",
                          borderColor: "#EF4444",
                          backgroundColor: "rgba(239,68,68,0.1)",
                        }}
                      >
                        Live Auction
                      </Badge>
                    )}
                  </div>

                  <div
                    className="rounded-xl p-6 mb-8 flex justify-between items-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div>
                      <div className="text-sm font-medium text-[#C2C2C5]">
                        {mode === "buy-now" ? "Price" : "Current Bid"}
                      </div>
                      <div className="text-5xl font-bold text-white">{formatPrice(price)}</div>
                    </div>
                    {mode === "auction" && (
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#C2C2C5]">Ends in</div>
                        <div className="text-2xl font-mono font-bold text-white">{formatTimeLeft()}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {mode === "buy-now" ? (
                    <>
                      <Button
                        className="w-full py-4 text-lg font-bold text-white"
                        style={{ backgroundColor: "#8B5CF6" }}
                      >
                        Buy Now
                      </Button>
                      <Dialog open={isOfferOpen} onOpenChange={setOfferOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full py-4 text-lg font-bold text-[#C2C2C5] border-2"
                            style={{ borderColor: "rgba(255,255,255,0.2)" }}
                          >
                            Make Offer
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg w-full p-8 space-y-6 bg-[#1C1C1F] border-white/10">
                          <DialogTitle className="text-2xl font-bold text-white">Make an Offer</DialogTitle>
                          <DialogClose className="absolute top-4 right-4 text-white hover:text-gray-300">
                            <X className="h-4 w-4" />
                          </DialogClose>

                          {/* Header panel - exact same structure as bid modal */}
                          <div className="bg-black rounded-lg p-4 flex items-center gap-4">
                            <div
                              className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
                              }}
                            >
                              <img
                                src="/placeholder.svg?height=40&width=40"
                                alt="Domain thumbnail"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white">{domain}</h3>
                              <p className="text-sm text-[#C2C2C5]">Price: {formatPrice(price)}</p>
                            </div>
                          </div>

                          {/* Offer amount input - exact same structure as bid modal */}
                          <div className="space-y-1">
                            <Label htmlFor="modal-offer" className="block text-sm font-medium text-white">
                              Offer Amount
                            </Label>
                            <div className="flex items-center gap-2">
                              <Input
                                id="modal-offer"
                                type="number"
                                value={offerAmount}
                                onChange={(e) => setOfferAmount(Number(e.target.value))}
                                placeholder="5000"
                                className="flex-1 text-lg py-2 bg-white/5 border-white/10 text-white"
                              />
                              <span className="text-lg font-semibold text-white">USD</span>
                            </div>
                            <p className="text-xs text-gray-400">Your starting offer.</p>
                          </div>

                          {/* Footer - exact same structure as bid modal */}
                          <div className="flex justify-end gap-4">
                            <Button
                              variant="outline"
                              onClick={() => setOfferOpen(false)}
                              className="text-[#C2C2C5] border-white/20"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleSendOffer}
                              style={{ backgroundColor: "#8B5CF6" }}
                              className="text-white"
                            >
                              Confirm Offer
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <Dialog open={isBidOpen} onOpenChange={setBidOpen}>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full py-4 text-lg font-bold text-white"
                          style={{ backgroundColor: "#EF4444" }}
                        >
                          Place Bid
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg w-full p-8 space-y-6 bg-[#1C1C1F] border-white/10">
                        <DialogTitle className="text-2xl font-bold text-white">Place Your Bid</DialogTitle>
                        <DialogClose className="absolute top-4 right-4 text-white hover:text-gray-300">
                          <X className="h-4 w-4" />
                        </DialogClose>

                        {/* Header panel */}
                        <div className="bg-black rounded-lg p-4 flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
                            }}
                          >
                            <img
                              src="/placeholder.svg?height=40&width=40"
                              alt="Domain thumbnail"
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white">{domain}</h3>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-[#C2C2C5]">Current Bid: {formatPrice(price)}</p>
                              <p className="text-sm text-[#C2C2C5]">Ends in: {formatTimeLeft()}</p>
                            </div>
                          </div>
                        </div>

                        {/* Bid amount input */}
                        <div className="space-y-1">
                          <Label htmlFor="modal-amount" className="block text-sm font-medium text-white">
                            Bid Amount
                          </Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="modal-amount"
                              type="number"
                              value={bidAmount}
                              onChange={(e) => setBidAmount(Number(e.target.value))}
                              placeholder="8600"
                              className="flex-1 text-lg py-2 bg-white/5 border-white/10 text-white"
                            />
                            <span className="text-lg font-semibold text-white">USD</span>
                          </div>
                          <p className="text-xs text-gray-400">Must be at least {formatPrice(price + 100)}.</p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-4">
                          <Button
                            variant="outline"
                            onClick={() => setBidOpen(false)}
                            className="text-[#C2C2C5] border-white/20"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleConfirmBid}
                            style={{ backgroundColor: "#EF4444" }}
                            className="text-white"
                          >
                            Confirm Bid
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Card D: Details/Activity */}
            <Card
              className="shadow-lg border rounded-xl flex flex-col flex-1"
              style={{
                backgroundColor: "#1C1C1F",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <CardContent className="p-8 flex flex-col justify-between flex-1">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
                  <TabsList className="grid grid-cols-2 mb-6 p-1 bg-white/5 rounded-lg">
                    <TabsTrigger
                      value="description"
                      className="py-2 font-medium data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-md"
                    >
                      Description
                    </TabsTrigger>
                    <TabsTrigger
                      value={mode === "buy-now" ? "details" : "activity"}
                      className="py-2 font-medium data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-md"
                    >
                      {mode === "buy-now" ? "Details" : "Activity"}
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <TabsContent value="description" className="flex-1 overflow-y-auto pr-2">
                      <p className="text-base leading-relaxed text-[#C2C2C5]">{description}</p>
                    </TabsContent>
                    <TabsContent
                      value={mode === "buy-now" ? "details" : "activity"}
                      className="flex-1 overflow-y-auto pr-2"
                    >
                      {mode === "buy-now" ? (
                        <ul className="space-y-2 text-base text-[#C2C2C5]">
                          {domainInfo.map((item, i) => (
                            <li key={i} className="flex justify-between">
                              <span>{item.label}</span>
                              <span className="font-semibold text-white">{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <table className="w-full text-left text-sm text-[#C2C2C5]">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="pb-2 font-medium">Bidder</th>
                              <th className="pb-2 font-medium">Date</th>
                              <th className="pb-2 font-medium text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {biddingHistory.map((b, i) => (
                              <tr key={i} className="border-b border-white/5">
                                <td className="py-2">{b.bidder}</td>
                                <td className="py-2">{b.date}</td>
                                <td className="py-2 text-right font-semibold text-white">{formatPrice(b.amount)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
