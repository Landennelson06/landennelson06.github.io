import { useState, useEffect } from "react";
import { saveService, createService } from "../api";

export default function EditModal({
  isOpen,
  setIsOpen,
  data,
  users = [],
  statuses = [],
}) {
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({
        id: data.id,
        vin: data.vin || "",
        make_model: data.make_model || "",
        service_date: data.service_date || "",
        mileage: data.mileage || "",
        service_details: data.service_details || "",
        parts_replaced: data.parts_replaced || "",
        status: data.status?.id || "",
      });
    } else {
      setForm({
        id: null,
        vin: "",
        make_model: "",
        service_date: "",
        mileage: "",
        service_details: "",
        parts_replaced: "",
        status: "1",
      });
    }
  }, [data]);

  if (!isOpen || !form) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const normalizePayload = (form) => ({
  ...form,
  mileage: form.mileage ? Number(form.mileage) : null,
  status: form.status ? Number(form.status) : null,
  });

  const handleSubmit = async () => {
    try {
      setSaving(true);
      const normalized = normalizePayload(form);
      const { id, ...payload } = normalized;

      if (form.id) {
        await saveService(payload,id);   // update
      } else {
        await createService(payload); // create
      }

      setIsOpen(false);
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">
          {form.id ? "Edit Service Record" : "Create Service Record"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="vin"
            value={form.vin}
            onChange={handleChange}
            placeholder="VIN"
            className="input"
          />

          <input
            name="make_model"
            value={form.make_model}
            onChange={handleChange}
            placeholder="Make / Model"
            className="input"
          />

          <input
            type="date"
            name="service_date"
            value={form.service_date}
            onChange={handleChange}
            className="input"
          />

          <input
            type="number"
            name="mileage"
            value={form.mileage}
            onChange={handleChange}
            placeholder="Mileage"
            className="input"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="input"
          >
                <option value={1}>Draft</option>
                <option value={2}>Submitted</option>
          </select>

        </div>

        <textarea
          name="service_details"
          value={form.service_details}
          onChange={handleChange}
          placeholder="Service Details"
          className="input mt-4 w-full"
        />

        <textarea
          name="parts_replaced"
          value={form.parts_replaced}
          onChange={handleChange}
          placeholder="Parts Replaced"
          className="input mt-2 w-full"
        />

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            disabled={saving}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}